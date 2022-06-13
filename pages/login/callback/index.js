import { useRouter } from "next/router";
import { useUser } from "../../../hooks/useUser";
import { api } from "../../../services";

export default function callback() {
  const { query } = useRouter();
  const { dataUser, userData } = useUser();

  const loginGithub = async () => {
    api.get(`/users/login/github?code=${query.code}`).then((response) => {
      const { jwt_token } = response.data;
      dataUser(jwt_token);
    });
  };

  loginGithub();
  return (
    <div>
      <h1> {userData.name} </h1>
    </div>
  );
}
