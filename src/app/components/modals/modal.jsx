import './modal.css';

const Modal = ({ modalid }) => {

  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <span className="close">&times;</span>
        <p>some text</p>
      </div>
    </div>
  );
};
export default Modal