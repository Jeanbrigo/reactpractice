import { useLoaderData, Link, Form, Outlet } from "react-router-dom";

export default function Show() {
  const note = useLoaderData();

  return (
    <section>
      <h2>{note.title}</h2>
      <p>{note.message}</p>
      <Link to={`/dashboard/${note._id}/update`}>
        <button>Update</button>
      </Link>
      <Outlet/>
      <Form action={`/dashboard/${note._id}/delete`} method="post">
        <button>Delete</button>
      </Form>
    </section>
  );
}
