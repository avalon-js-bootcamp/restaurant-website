import "./home.css";

export default function Home() {
  return (
    <div className="home-page">
      <div className="home-header">Bunnie Tea House</div>
      <div className="home-info">
        Bunnie Tea House is a cozy and charming tea shop that invites you to
        take a break from the hustle and bustle of everyday life. Step inside
        and you'll be greeted by the sweet aroma of freshly brewed tea, as well
        as the friendly smiles of the staff. The shop offers a wide range of
        loose leaf teas, including classic blends and unique flavors, all
        sourced from around the world. Whether you're looking for a quick cup to
        go or a relaxing afternoon tea with friends, Bunnie Tea House is the
        perfect spot to unwind and savor the moment.
      </div>
      <div className="working-hour">
        <div className="monday"> Monday : 9am - 7pm</div>
        <div className="tuesday">Tuesday : 9am - 7pm</div>
        <div className="wednesday">Wednesday : 9am - 7pm</div>
        <div className="thursday">Thursday : 9am - 10pm</div>
        <div className="friday">Friday : 9am - 7pm</div>
        <div className="saturday"> Saturday : 9am - 11pm</div>
        <div className="sunday"> Sunday: 9am - 11pm</div>
      </div>
    </div>
  );
}
