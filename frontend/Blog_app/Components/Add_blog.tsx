import React from "react";
import './style.css';
import { Nav_menu } from "./Nav_menu";
import { Link } from "react-router-dom";
import { ReactDimmer } from "react-dimmer";
import { Input_post_component } from "./Modal/New_post";

interface IModalProps {
    closeModal: boolean;
}
export const AddBlog = ({ wallet }, { closeModal }: IModalProps) => {
    const [newBlog, setNewBlog] = React.useState({})
    const handleClick = (event) => {
        // event.preventDefault()
        setNewBlog({
            "title": event.target.title.value,
            "type_blog": event.target.type_blog.value,
            "content": event.target.content.value
        })
    }

    console.log("newBlog: " + JSON.stringify(newBlog))
    const addBlog = (event) => {
        event.preventDefault()
    }
    return (
        // <div className="home_container">
        //     <Nav_menu accountId={wallet} />


        // </div>
        <div className="modal">

            <Input_post_component data={wallet} />
        </div>
    )
}