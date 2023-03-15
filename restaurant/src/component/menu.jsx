import "./menu.css";

export default function Menu() {
  const menuItems = [
    [
      "Classic Earl Grey Tea",
      " A timeless favorite, our Earl Grey tea is made with high-quality black tea leaves and infused with the natural oils of bergamot fruit for a fragrant and refreshing taste.",
      "$3.50",
    ],
    [
      "Matcha Latte",
      "This Japanese-style latte is made with premium matcha powder and steamed milk, creating a smooth and creamy beverage with a delicate green tea flavor.",
      "$5.50",
    ],
    [
      "Rooibos Chai Tea",
      "Our Rooibos Chai tea blends the sweet, nutty taste of rooibos with traditional chai spices like cinnamon, cardamom, and ginger for a warming and aromatic drink.",
      "$4.50",
    ],
    [
      "Rose Milk Tea",
      "A fragrant and floral twist on classic milk tea, our Rose Milk Tea features a blend of black tea, rose petals, and sweetened condensed milk for a creamy and indulgent treat.",
      "$4.75",
    ],
    [
      "Iced Hibiscus Tea",
      "A refreshing and fruity iced tea made with dried hibiscus flowers, which lend their vibrant color and tangy flavor to the drink. Perfect for a hot summer day!",
      "$3.75",
    ],
  ];
  let menuPage = menuItems.map((x) => {
    return (
      <div className="menu-card">
        <div className="menu-card-name">{x[0]}</div>
        <div className="menu-card-info">{x[1]}</div>
        <div className="menu-card-price">{x[2]}</div>
      </div>
    );
  });
  return <div className="menu-page">{menuPage}</div>;
}
