import { Container, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCampsiteById } from '../features/campsites/campsitesSlice';
import CampsiteDetail from '../features/campsites/CampsiteDetail';
import CommentsList from '../features/comments/CommentsList';
import SubHeader from '../components/SubHeader';
import Error from '../components/Error';
import Loading from '../components/Loading';

const CampsiteDetailPage = () => {
    const { campsiteId } = useParams();
    const campsite = useSelector(selectCampsiteById(campsiteId));
    const isLoading = useSelector((state) => {
        return state.campsites.isLoading;
    });
    const errMsg = useSelector((state) => {
        return state.campsites.errMsg;
    });
    let content = null;

    if (isLoading) {
        content = <Loading />;
    } else if (errMsg) {
        content = <Error errMsg={errMsg} />;
    } else {
        content = (
            <>
                <SubHeader current={campsite.name} detail />
                <Row>
                    <CampsiteDetail campsite={campsite} />
                    <CommentsList campsiteId={campsiteId} />
                </Row>
            </>
        );
    }

    return <Container>{content}</Container>;
};

export default CampsiteDetailPage;
