import { Button } from "react-bootstrap";

const AddButton = ({onAdd, showAdd}) => {
    return (
        <Button 
            text='Add'
            variant= {showAdd ? 'danger' : 'success'} 
            size="lg" 
            onClick={onAdd}
        >
                {showAdd ? 'Close' : 'Add'}
        </Button>
    )
}

export default AddButton
