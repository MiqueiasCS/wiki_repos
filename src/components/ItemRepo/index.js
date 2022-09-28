import { ItemContainer } from "./styles";

const ItemRepo = ({ repo }) => {
  return (
    <ItemContainer>
      <h3>{repo.name}</h3>
      <p>{repo.full_name}</p>
      <div className="links">
        <a href={repo.html_url} rel="noopener noreferrer">
          ver repositorio
        </a>
        <a href="#top" rel="noopener noreferrer" className="remover">
          Remover
        </a>
      </div>
      <hr />
    </ItemContainer>
  );
};

export default ItemRepo;
