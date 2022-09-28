import { ItemContainer } from "./styles";

const ItemRepo = ({ repo, handleRemoveRepo }) => {
  const handleRemove = () => {
    handleRemoveRepo(repo.id);
  };

  return (
    <ItemContainer>
      <h3>{repo.name}</h3>
      <p>{repo.full_name}</p>
      <div className="links">
        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
          ver repositorio
        </a>
        <p onClick={handleRemove} className="remover">
          Remover
        </p>
      </div>
      <hr />
    </ItemContainer>
  );
};

export default ItemRepo;
