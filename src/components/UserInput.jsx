export default function UserInput() {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input type="number" required />
        </p>
        <p>
          <label>Annual Investment</label>
          <input type="number" required />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Return</label>
          <input type="number" required />
        </p>
        <p>
          <label>duration</label>
          <input type="number" required />
        </p>
      </div>
    </section>
  );
}
