import { editFavorite } from "@/redux/features/favoritesSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Modal from "react-bootstrap/Modal";
import { Button as ButtonUI } from "@/stories/Button";
import InputField from "@/stories/InputField";
import getLastValueBeforeSlash from "@/utils/getLastValueBeforeSlash";

const EditCharacterModal = ({
  modalIsOpen,
  character,
  onClose,
}: {
  modalIsOpen: any;
  character: any;
  onClose: () => void;
}) => {
  const [gender, setGender] = useState(character.gender);
  const [height, setHeight] = useState(character.height);
  const dispatch = useDispatch();
  const handleSave = () => {
    dispatch(
      editFavorite({
        id: getLastValueBeforeSlash(character.url),
        gender,
        height,
      })
    );
    onClose();
  };

  return (
    <Modal show={modalIsOpen} onHide={onClose} backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>
          <h2>Edit {character.name}</h2>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <InputField
          label="Height:"
          type="text"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />

        <InputField
          label="Gender:"
          type="text"
          value={gender.toUpperCase()}
          onChange={(e) => setGender(e.target.value)}
        />
      </Modal.Body>
      <Modal.Footer className="flex">
        <ButtonUI variant="primary" label="Cancel" onClick={onClose} />
        <ButtonUI variant="secondary" label="Save" onClick={handleSave} />
      </Modal.Footer>
    </Modal>
  );
};

export default EditCharacterModal;
