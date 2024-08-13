import axios from "axios";
import { useEffect, useState } from "react";

function UserCRUD() {
  const [id, setId] = useState("");
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [skillsets, setSkillsets] = useState("");
  const [hobby, setHobby] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => await Load())();
  }, []);

  async function Load() {
    const result = await axios.get(
      "https://completedevelopernetwork20240813140244.azurewebsites.net/api/Users/"
    );
    setUsers(result.data);
    console.log(result.data);
  }

  async function save(event) {
    event.preventDefault();
    try {
      await axios.post(
        "https://completedevelopernetwork20240813140244.azurewebsites.net/api/Users/AddUser",
        {
          Username: username,
          Name: name,
          Email: email,
          Phone: phone,
          Skillsets: skillsets,
          Hobby: hobby,
        }
      );
      alert("New User Added");
      setId("");
      setUsername("");
      setName("");
      setEmail("");
      setPhone("");
      setSkillsets("");
      setHobby("");

      Load();
    } catch (err) {
      alert(err);
    }
  }

  async function editUser(users) {
    setId(users.id);
    setUsername(users.username);
    setName(users.name);
    setEmail(users.email);
    setPhone(users.phone);
    setSkillsets(users.skillsets);
    setHobby(users.hobby);
  }

  async function DeleteUser(id) {
    await axios.delete(
      "https://completedevelopernetwork20240813140244.azurewebsites.net/api/Users/DeleteUser/" +
        id
    );
    alert("User deleted Successfully");
    setId("");
    setUsername("");
    setName("");
    setEmail("");
    setPhone("");
    setSkillsets("");
    setHobby("");
    Load();
  }

  async function update(event) {
    event.preventDefault();
    try {
      await axios.patch(
        "https://completedevelopernetwork20240813140244.azurewebsites.net/api/Users/UpdateUser/" +
          users.find((u) => u.id === id).id || id,
        {
          Id: id,
          Username: username,
          Name: name,
          Email: email,
          Phone: phone,
          Skillsets: skillsets,
          Hobby: hobby,
        }
      );
      alert("Updated");
      setId("");
      setUsername("");
      setName("");
      setEmail("");
      setPhone("");
      setSkillsets("");
      setHobby("");

      Load();
    } catch (err) {
      alert(err);
    }
  }

  return (
    <div>
      <h1>User Details</h1>
      <div class="container mt-4">
        <form>
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              id="id"
              hidden
              value={id}
              onChange={(event) => {
                setId(event.target.value);
              }}
            />

            <label>Username</label>
            <input
              type="text"
              class="form-control"
              id="username"
              value={username}
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            />
          </div>
          <div class="form-group">
            <label>Name</label>
            <input
              type="text"
              class="form-control"
              id="name"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
            <label>Email</label>
            <input
              type="text"
              class="form-control"
              id="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
            <label>Phone</label>
            <input
              type="text"
              class="form-control"
              id="phone"
              value={phone}
              onChange={(event) => {
                setPhone(event.target.value);
              }}
            />
            <label>Skillsets</label>
            <input
              type="text"
              class="form-control"
              id="skillsets"
              value={skillsets}
              onChange={(event) => {
                setSkillsets(event.target.value);
              }}
            />
            <label>Hobby</label>
            <input
              type="text"
              class="form-control"
              id="hobby"
              value={hobby}
              onChange={(event) => {
                setHobby(event.target.value);
              }}
            />
          </div>
          <div>
            <button class="btn btn-primary mt-4" onClick={save}>
              Add User
            </button>
            <button class="btn btn-warning mt-4" onClick={update}>
              Update User
            </button>
          </div>
        </form>
      </div>
      <br></br>

      <table class="table table-dark" align="center">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Username</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Skillsets</th>
            <th scope="col">Hobby</th>

            <th scope="col">Option</th>
          </tr>
        </thead>
        {users.map(function fn(user) {
          return (
            <tbody>
              <tr>
                <th scope="row">{user.id} </th>
                <td>{user.username}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.skillsets}</td>
                <td>{user.hobby}</td>

                <td>
                  <button
                    type="button"
                    class="btn btn-warning"
                    onClick={() => editUser(user)}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    class="btn btn-danger"
                    onClick={() => DeleteUser(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}

export default UserCRUD;
