function FirstComponent({ business }) {
  return (
    <p>
      {business.businessOwner} established {business.storeName} on{" "}
      {business.date} and has completed {business.startingYear} years.{" "}
      {business.storeName} store is located at {business.location} and is open
      from {business.openingTime} to {business.closingTime}.
      {business.businessType &&
        business.businessProduct &&
        `Our
        ${business.businessType} business mainly deals with the
        ${business.businessProduct}`}
      products and is categorized under {business.businessCategory} category.
    </p>
  );
}

export default FirstComponent;
