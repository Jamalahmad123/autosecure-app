const Wrapper = ({ children, className = "" }) => {
  const classes = `container mx-auto ${className}`;
  return <div className={classes}>{children}</div>;
};

export default Wrapper;
