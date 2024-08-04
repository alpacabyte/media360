function ServiceTile({ title, description }) {
  return (
    <div className="services-tile">
      <h2 className="title">{title}</h2>
      <p className="description">{description}</p>
    </div>
  );
}

export default ServiceTile;
