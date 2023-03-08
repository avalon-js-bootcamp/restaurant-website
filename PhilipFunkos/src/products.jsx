import "./products.css";
export default function product() {
  const funkoArray = [
    [
      "tanjiro Glow In The Dark Chase",
      "Introducing the highly coveted Tanjiro Glow in the Dark Chase Funko Pop! Featuring Tanjiro in his signature demon-slaying outfit, this limited edition Funko Pop! also glows in the dark, making it the perfect addition to any anime fan's collection. Don't miss out on your chance to own this rare and highly sought-after collectible!",
      "$100",
      "https://images.hobbydb.com/processed_uploads/catalog_item_photo/catalog_item_photo/image/968784/Tanjiro_Kamado_%2528Hinokami_Kagura_Dance%2529_%2528Glow_in_the_Dark%2529_Vinyl_Art_Toys_662050fa-ee45-4256-a4f2-933a848d9b31.jpg",
      "Tanjiro",
    ],
    [
      "Inosuke Flocked Chase",
      "Behold the mighty Inosuke Hashibira in his flocked glory! This limited edition Funko Pop! features Inosuke with a soft and fuzzy flocked texture, making it a must-have for any fan of the Demon Slayer anime series. With its unique design and limited availability, the Inosuke Flocked Chase Funko Pop! is a rare gem that collectors won't want to miss. Add it to your collection today!",
      "$100",
      "https://images.hobbydb.com/processed_uploads/catalog_item_photo/catalog_item_photo/image/1032711/Inosuke_Hashibira_%2528without_Mask%2529_%2528Flocked%2529_Vinyl_Art_Toys_43804742-5cfa-4789-9b10-31a16bac4657.jpg",
      "Inosuke",
    ],
    [
      "Cheshire Cat Glow and Flocked Chase",
      "The Cheshire Cat is back and better than ever! This limited edition Funko Pop! features the iconic Alice in Wonderland character with a flocked texture and a mesmerizing glow in the dark effect. With its eye-catching design and limited availability, the Cheshire Cat Glow in the Dark and Flocked Chase Funko Pop! is a must-have for any collector of Disney or Funko Pop! figures. Don't be late for this very important date - grab yours before they're gone!",
      "$100",
      "https://images.hobbydb.com/processed_uploads/catalog_item_photo/catalog_item_photo/image/1256867/Cheshire_Cat_Vinyl_Art_Toys_cbcaefd8-bc2e-410e-9ab8-3aa354a982d3.png",
      "Cheshire Cat",
    ],
  ];

  let entirePage = funkoArray.map((x) => {
    return (
      <div className="product-card">
        <div className="product-name">{x[0]}</div>
        <div className="product-description">{x[1]}</div>
        <div className="product-price">{x[2]}</div>
        <img className="image" src={x[3]} alt={x[4]}></img>
      </div>
    );
  });
  console.log(entirePage);
  return (
    <div className="products-page">
      <div className="product-header">Rare Collectable Funkos</div>
      {entirePage}
    </div>
  );
}
