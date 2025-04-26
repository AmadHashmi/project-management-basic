export default function Input({ textarea, label, ...props }) {
  return (
    <p>
      <label htmlFor="">{label}</label>
      {textarea ? (
        <textarea name="" id="" {...props}></textarea>
      ) : (
        <input type="text" {...props} />
      )}
    </p>
  );
}
