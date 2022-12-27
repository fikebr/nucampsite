import { Container } from 'reactstrap';
import CampsitesList from '../features/campsites/CampsitesList';
import SubHeader from '../components/SubHeader';

const CampsitesDirectoryPage = () => (
        <Container>
                <SubHeader current="Directory" />
                <CampsitesList />
        </Container>
);

export default CampsitesDirectoryPage;
