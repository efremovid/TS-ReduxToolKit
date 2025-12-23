// import styles from "./Styles.module.scss";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   increment,
//   decrement,
//   incrementByNumber,
//   decrementByNumber,
// } from "../../state/counter-slice";
// import { useState } from "react";

// const Counter = () => {
//   const [number, setNumber] = useState("");
//   const count = useSelector((state: any) => state.counter.count);
//   const dispatch = useDispatch();

//   const plusOne = () => {
//     dispatch(increment());
//   };

//   const minusOne = () => {
//     dispatch(decrement());
//   };

//   const plusMany = () => {
//     dispatch(incrementByNumber(+number));
//   };

//   const minusMany = () => {
//     dispatch(decrementByNumber(+number));
//   };

//   const handleChange = (e: any) => {
//     setNumber(e.target.value);
//   };

//   return (
//     <>
//       <div className={styles.container}>
//         <h1 className={styles.title}>counter: {count}</h1>
//         <button onClick={plusOne} className={styles.btn}>
//           +
//         </button>
//         <button onClick={minusOne} className={styles.btn}>
//           -
//         </button>
//       </div>
//       <p>=======================</p>
//       <div className={styles.container}>
//         <h1 className={styles.title}>counter: {count}</h1>
//         <input
//           className={styles.input}
//           type="number"
//           value={number}
//           onChange={handleChange}
//         />
//         <button onClick={plusMany} className={styles.btn}>
//           +
//         </button>
//         <button onClick={minusMany} className={styles.btn}>
//           -
//         </button>
//       </div>
//     </>
//   );
// };

// export default Counter;
