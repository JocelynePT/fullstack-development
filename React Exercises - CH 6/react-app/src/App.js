import './App.css';

const tahoe_peaks = [
  
];

function List({data, renderItem, renderEmpty}) {
  return !data.length ? renderEmpty : <ul>{data.map((item) => (<li key={item.name}>{renderItem(item)}</li>))}</ul>
}
function App() {
  return(
    <div>
      <List data={tahoe_peaks} renderEmpty={<p>This list is empty</p>} renderItem={item => <>{item.name} - {item.elevation} ft.</>}/>
    </div>
  );
}


export default App;
