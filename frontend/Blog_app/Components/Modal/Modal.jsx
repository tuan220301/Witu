import React from 'react';
import ReactDOM from 'react-dom';
import { EditBlog } from '../../Modules/Update/Edit_Blog';
import { HeaderModal } from './Header_Modal';
import { DeleteBlog } from '../../Modules/Update/Delete_Blog';
const Modal = ({ isShowing, hide, title, data, listControl, option }) => isShowing ? ReactDOM.createPortal(
    <React.Fragment>
        <div>
            {option === 0 ? <div>
                <div className="modal-overlay" ></div>
                <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
                    <div className="modal">
                        <HeaderModal title={title} hide={hide} />
                        <EditBlog blog={data} hide={hide} listControl={listControl} />
                    </div>
                </div>
            </div> : <div>
                <div className="modal-overlay" ></div>
                <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
                    <div className="modal">
                        <HeaderModal title={title} hide={hide} />
                        <DeleteBlog blog={data} listControl={listControl} />
                    </div>
                </div>
            </div>
            }
        </div>
    </React.Fragment>, document.body
) : null;

export default Modal;
