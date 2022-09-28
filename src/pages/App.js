import gitLogo from "../assets/github.png";
import { Container } from "./styles";
import Input from "../components/Input";
import ItemRepo from "../components/ItemRepo";
import Button from "../components/Button";

import { useState } from "react";
import { api } from "../services/api";

function App() {
  const [repos, setRepos] = useState([]);
  const [currentRepo, setCurrentRepo] = useState("");

  const handleSearchRepo = async () => {
    try {
      const { data } = await api.get(`/repos/${currentRepo}`);

      if (data.id) {
        const alreadyListedRepo = repos.find((repo) => repo.id === data.id);

        if (!alreadyListedRepo) {
          setRepos((prev) => [...prev, data]);
          setCurrentRepo("miqueiasCS/");
        }
      }
    } catch (e) {
      alert(e.message);
    }
  };

  const handleRemoveRepo = (id) => {
    const newReposList = repos.filter((repo) => repo.id !== id);
    setRepos([...newReposList]);
  };

  return (
    <Container className="App">
      <img src={gitLogo} alt="logo do github" />
      <Input
        value={currentRepo}
        onChange={(e) => setCurrentRepo(e.target.value)}
      />
      <Button onClick={handleSearchRepo} />
      {repos.map((repo, index) => (
        <ItemRepo key={index} repo={repo} handleRemoveRepo={handleRemoveRepo} />
      ))}
    </Container>
  );
}

export default App;
