import { FiArrowLeftCircle } from 'react-icons/fi';
import { Button, LinkBack } from './BackButton.styled';

const BackButton = ({ to }) => {
  return (
    <LinkBack to={to}>
      <Button>
        <FiArrowLeftCircle /> Come Back
      </Button>
    </LinkBack>
  );
};

export default BackButton;
