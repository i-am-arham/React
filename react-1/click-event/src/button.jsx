function Button() {
  const eventHandle = (e) => {
    e.target.textContent = "Arham";
  };
  return <button onDoubleClick={(e) => eventHandle(e)}>Click on</button>;
}

export default Button;
