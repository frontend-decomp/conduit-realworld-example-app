function Avatar({ alt, className, src }) {
  return (
    <img
      alt={alt || "placeholder"}
      className={className || ""}
      src={src || "/default-avatar.svg"}
    />
  );
}

export default Avatar;
