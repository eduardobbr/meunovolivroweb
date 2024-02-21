export const Link = ({ entityKey, contentState, children }) => {
  const { url, id } = contentState.getEntity(entityKey).getData();

  return (
    <a
      href={url}
      id={id}
      style={{
        cursor: "pointer",
      }}
    >
      {children}
    </a>
  );
};
export const LinkRedirect = ({ entityKey, contentState, children }) => {
  const { url } = contentState.getEntity(entityKey).getData();

  return (
    <a
      href={url}
      style={{
        cursor: "pointer",
      }}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

export const Title = ({ children }) => {
  return <h1 className="title">{children}</h1>;
};
export const Italic = ({ children }) => {
  return <em className="italic">{children}</em>;
};
