import '../css/Menu.css';

const Menu = ({ items }) => {
  return (
    <div className="menu">
      <ul>
        {items.map((item) => (
          <li>
            <a href={item.href}>{item.value}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
