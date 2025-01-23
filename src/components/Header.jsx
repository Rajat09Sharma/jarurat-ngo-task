import { Form, Link, redirect, useActionData, useNavigation } from "react-router-dom";
import Modal from "./Modal";
import { useState } from "react";
import ErrorBlock from "./ErrorBlock";
import { fetchUsers } from "../util/http";


export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const error = useActionData();

  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  // console.log(isSubmitting);


  function handleModalOpne() {
    setIsModalOpen(true);
  }
  function handleClose() {
    setIsModalOpen(false);
  }

  return (
    <>
      <Modal open={isModalOpen} onClose={handleClose}>
        <Form method="post">
          {error && <ErrorBlock message={error.message} />}
          <div className="mb-3">
            <label htmlFor="UserName" className="form-label">UserName</label>
            <input type="text" className="form-control" id="UserName" name="username" />
          </div>
          <div className="mb-3">
            <label htmlFor="Name" className="form-label">Name</label>
            <input type="text" className="form-control" id="Name" name="name" />
          </div>
          <div className="mb-3">
            <label htmlFor="Email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="Email" name="email" />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">Phone</label>
            <input type="number" className="form-control" id="phone" name="phone" />
          </div>
          <div className="mb-3">
            <label htmlFor="Address" className="form-label">Address</label>
            <input type="text" className="form-control" id="Address" name="dddress" />
          </div>
          {!isSubmitting && <div className="form-actions mt-3">
            <button className="" onClick={handleClose} type="button">Cancle</button>
            <button className="btn btn-color" type="submit">Submit</button>
          </div>}
          {isSubmitting && <p className="form-actions"><span>Submitting........</span></p>}
        </Form>
      </Modal>
      <div className="header">
        <h1>Jarurat care <strong>NGO</strong></h1>
        <p>Users Desk!</p>
        <button className="btn btn-color" onClick={handleModalOpne} >Create user</button>
      </div>
    </>
  )
}

export async function action({ request, params }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData.entries());
  const { username, name, email, phone, address } = data;
  if (!username || !name || email || phone || address) {
    return { message: "All fields are required." }
  }
  return redirect("/");
}
