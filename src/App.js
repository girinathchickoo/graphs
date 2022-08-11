import "./App.css";
// import { useState } from "react";
import micn from "./micn.json";
import wltcclass1 from "./wltcclass1.json";
import wltcclass2 from "./wltcclass2.json";
import ShareBtn from "chrome-web-share";
// import "chrome-web-share/dist/ShareBtn";
import { BUTTON_TYPES } from "chrome-web-share";

// import { ReactQueryDevtools } from "react-query/devtools";

// import StartupAddmore from "./components/startupAddmore";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function App() {
  // const obj1 = micn.toString();
  // console.log(micn);
  // const [tempCel, setTempCel] = useState(0);
  // const [tempFar, setTempFar] = useState(0);
  // const [message, setMessage] = useState({ name: "giri", age: 34 });

  // const [selectedFile, setSelectedFile] = useState();

  return (
    <>
      {/* <div style={{ width: "100%", height: "500px" }}>
        <div style={{ width: "100%", height: "500px" }}>
          <h1 style={{ textAlign: "center" }}>MIDC</h1>
          <span>Speed (kmph)</span>{" "}
          <ResponsiveContainer width="100%" height="100%">
            <LineChart tickLine={false} width={300} height={500} data={micn}>
              <XAxis dataKey="Time (s)"></XAxis>
              <YAxis dataKey="Speed (kmph)" />

              <Tooltip
                active
                style={{ display: "block" }}
                content={<CustomTooltip />}
              />

              <Line
                onAnimationStart={(e, val) => {}}
                type="monotone"
                dataKey="Speed (kmph)"
                stroke="red"
                strokeWidth={2}
                dot={false}
                animationDuration={1180000}
              ></Line>
            </LineChart>
          </ResponsiveContainer>
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Time (s)
          </div>
        </div>
        <div style={{ width: "100%", height: "500px", marginTop: "200px" }}>
          <h1 style={{ textAlign: "center" }}>WLTCClass1</h1>
          <span>Speed (kmph)</span>{" "}
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              tickLine={false}
              width={300}
              height={500}
              data={wltcclass1}
            >
              <XAxis dataKey="Time (s)"></XAxis>
              <YAxis dataKey="Speed (kmph)" />

              <Tooltip
                active
                style={{ display: "block" }}
                content={<CustomTooltip />}
              />

              <Line
                onAnimationStart={(e, val) => {}}
                type="monotone"
                dataKey="Speed (kmph)"
                stroke="red"
                strokeWidth={2}
                dot={false}
                animationDuration={1022000}
              ></Line>
            </LineChart>
          </ResponsiveContainer>
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Time (s)
          </div>
        </div>
        <div style={{ width: "100%", height: "500px", marginTop: "200px" }}>
          <h1 style={{ textAlign: "center" }}>WLTCClass2</h1>
          <span>Speed (kmph)</span>{" "}
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              tickLine={false}
              width={300}
              height={500}
              data={wltcclass2}
            >
              <XAxis dataKey="Time (s)"></XAxis>
              <YAxis dataKey="Speed (kmph)" />

              <Tooltip
                active
                style={{ display: "block" }}
                content={<CustomTooltip />}
              />

              <Line
                onAnimationStart={(e, val) => {}}
                type="monotone"
                dataKey="Speed (kmph)"
                stroke="red"
                strokeWidth={2}
                dot={false}
                animationDuration={1477000}
              ></Line>
            </LineChart>
          </ResponsiveContainer>
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Time (s)
          </div>
        </div>
      </div> */}
      {/* <ShareBtn
        shareUrl={"https://zelta.io"}
        disabled={["whatsApp"]}
        shareText={"girinath"}
        className="my-class-name"
        buttonText="Share Profile"
      /> */}
      <button
        onClick={() => {
          navigator.share({ url: "https://zelta.io" });
        }}
      >
        share
      </button>
    </>
  );
}

const CustomTooltip = ({ active, payload, label }) => {
  console.log(payload, active);
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          background: "white",
          border: "1px solid #000",
          padding: "4px",
        }}
      >
        <p className="text-sm font-medium text-text-secondary">{`Time (s): ${
          payload[0]?.payload["Time (s)"] ? payload[0]?.payload["Time (s)"] : ""
        }`}</p>
        <p className="text-sm font-medium text-text-secondary">{`Speed (kmph): ${
          payload[0]?.payload["Speed (kmph)"]
            ? Math.floor(Number(payload[0]?.payload["Speed (kmph)"]) * 100) /
              100
            : ""
        }`}</p>
      </div>
    );
  }
  return null;
};

export default App;

// const page = useRef(1);
// const dispatch = useDispatch();

// async function fetchFunction() {
//   const req = await fetch("http://localhost:3002", {
//     method: "GET",
//     credentials: "include",
//   });
//   console.log(req);

//   return req.json();
// }
// useEffect(async () => {
//   var req = await fetch("http://localhost:3002/giri");
//   console.log(req);
// }, []);

// const data = useQuery("users", fetchFunction);
// const mutation = useMutation(async (variables) => {
//   console.log(variables);
//   let req = await fetch("http://localhost:3002", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(variables),
//   });
//   let res = req.json();
// });
// console.log(mutation);
// var users1 = useSelector((state) => state);
// const { user: users } = users1;

// function apiFunction() {
//   const payload = {
//     no: page.current,
//   };
//   fetch("http://localhost:3002", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(payload),
//   })
//     .then((res) => res.json())
//     .then((r) => {
//       dispatch({ type: "Users", payload: r });
//     });
// }
// function setTemperature(val, unit) {
//   // console.log(val,unit)
//   if (unit == "c") {
//     setTempCel(val);
//     setTempFar((val * 9) / 5 + 32);
//   } else {
//     setTempFar(val);
//     setTempCel(((val - 32) * 5) / 9);
//   }
// }

// useEffect(() => {
//   fetch("https://jsonplaceholder.com")
//     .then((res) => res.json())
//     .then((r) => {
//       console.log(r);
//     })
//     .catch((err) => {
//       console.log(err);
//     });

// function fileUpload() {
//   const formData = new FormData();
//   console.log(selectedFile);
//   formData.append("file", selectedFile);
// }

// useEffect(() => {
//   window.addEventListener("resize", function () {
//     setSelectedFile(window.innerWidth);
//   });
// }, []);

// useEffect(() => {
//   console.log("called");
// }, []);
