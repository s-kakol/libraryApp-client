import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Col from 'react-bootstrap/Col';

const SortingDropdown = (): JSX.Element => {
  return (
    <Col
      style={{ display: 'flex', justifyContent: 'right', paddingTop: '0.5rem' }}
    >
      <DropdownButton
        id="sorting-dropdown"
        variant="secondary"
        title="Sort books"
      >
        <Dropdown.Item>Author</Dropdown.Item>
        <Dropdown.Item>Title</Dropdown.Item>
        <Dropdown.Item>Publication Year</Dropdown.Item>
      </DropdownButton>
    </Col>
  );
};

export default SortingDropdown;
