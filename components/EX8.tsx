import React,{useState} from 'react'

export default function EX8() {
    const [checkedItems, setCheckedItems] = useState([]);
    const options = ["Bóng đá", "Âm nhạc", "Du lịch", "Lập trình"];

    const handleChange = (e) => {
    const value = e.target.value;

    if (e.target.checked) {
      setCheckedItems([...checkedItems, value]);
    } else {
      setCheckedItems(checkedItems.filter((item) => item !== value));
    }
  };

  return (
    <div>
        <h2>Chọn sở thích</h2>
      {options.map((option, index) => (
        <label key={index} style={{ display: "block" }}>
          <input
            type="checkbox"
            value={option}
            checked={checkedItems.includes(option)}
            onChange={handleChange}
          />
          {option}
        </label>
      ))}

      <h3>Giá trị đã chọn:</h3>
      <ul>
        {checkedItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
