// export default {
//   text: {
//     main: "#C2AB8E",
//     secondary: "#C0C0C0",
//     neutral: "#777E88",
//   }
// };

const theme = {
  text: {
    main: "#C2AB8E",
    secondary: "#C0C0C0",
    neutral: "#777E88",
  },

  font: {
    small: "13px",
  },

  fontFamily: {
    main: "Manrope, sans-serif",
  },
};

export default theme;



   let initialValue = {
    number: "",
    cvv: "",
    expiry: "",
    name: "",
  };

//   const [formData, setFormData] = useState(initialValue);
//     const navigate = useNavigate();

//      const handleChange = (e) => {
//      const { name, value } = e.target;
//      setFormData({ ...formData, [name]: value });
//  };

//    const handleSubmit = () => {
//       if (formData.name === "" || formData.number === "" || formData.cvv === "" || formData.expiry === "" || formData.name === "") {
//       alert("Please Fill all box");
//        }else{
//          setFilled(true)
//        navigate("/paymentdone");
//        }