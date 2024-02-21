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
