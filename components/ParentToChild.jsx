function ParentToChild({ text, count }) {
  return (
    <div>
      <h2 className="text-lg">{text}</h2>
      <h2 className="text-3xl text-center py-5"> {count}</h2>
    </div>
  );
}

export default ParentToChild;
