import { Col } from 'reactstrap';
import { useSelector } from 'react-redux';
import Partner from './Partner';
import { selectAllPartners } from './partnersSlice';
import Error from '../../components/Error';
import Loading from '../../components/Loading';

const PartnersList = () => {
    const partners = useSelector(selectAllPartners);
    const isLoading = useSelector((state) => {
        return state.partners.isLoading;
    });
    const errMsg = useSelector((state) => {
        return state.partners.errMsg;
    });

    if (isLoading) {
        return <Loading />;
    }
    if (errMsg) {
        return <Error errMsg={errMsg} />;
    }
    return (
        <Col className="mt-4">
            {partners.map((partner) => {
                return (
                    <div className="d-flex mb-5" key={partner.id}>
                        <Partner partner={partner} />
                    </div>
                );
            })}
        </Col>
    );
};

export default PartnersList;
