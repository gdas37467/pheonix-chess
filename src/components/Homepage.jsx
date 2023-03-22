import React from "react";
import pheonix from "../phoenix_logo.png";
import grandprize from "../grand-prize.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Homepage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [institute, setInstitute] = useState("");
  const [idProofFile, setIdProofFile] = useState(null);
  const [paymentProofFile, setPaymentProofFile] = useState(null);
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [fideId, setFideId] = useState("");
  const [fideRating, setFideRating] = useState("");
  const [gameCategory, setGameCategory] = useState("");
  const [dob, setDob] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const genderOptions = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "other", label: "Other" },
  ];
  const gameCategories = [
    { value: "Open", label: "Open" },
    { value: "U-11", label: "U-11" },
    { value: "U-17", label: "U-17" },
  ];

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    const formData = new FormData();
    formData.append("name", fullName);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("dob", dob);
    formData.append("fideid", fideId);
    formData.append("rating", fideRating);
    formData.append("institute", institute);
    formData.append("category", gameCategory);
    formData.append("gender", gender);
    formData.append("payment", paymentProofFile);
    formData.append("idproof", idProofFile);

    return fetch("https://precious-khapse-e65d71.netlify.app/submit", {
      method: "POST",
      body: formData,
    })
      .then((response) => response)
      .then((data) => {
        console.log(data);
        if (data.ok) {
          navigate("/thanks");
        }
      })
      .catch((error) => console.error(error));
    // Submit form data to server
  }
  function handleIdProofFileChange(event) {
    const file = event.target.files[0];
    setIdProofFile(file);
  }

  function handlepaymentProofFileChange(event) {
    const file = event.target.files[0];
    setPaymentProofFile(file);
  }

  return (
    <>
      <div
        className="w-screen h-screen bg-fixed bg-no-repeat bg-right-bottom-1 md:bg-center"
        style={{
          backgroundImage: `url('http://dkkit.rometheme.pro/duchess/wp-content/uploads/sites/51/2022/06/chess-set-PBRN2UXa.jpg')`,
        }}
      >
        <div className=" bg-black bg-opacity-60 overflow-y-scroll h-full w-full">
          <div className="flex justify-center">
            <div className=" w-60 -m-9 md:w-96 md:-mt-12">
              <img src={pheonix} alt="" />
            </div>
          </div>
          <div className="text-xs md:text-base flex justify-center font-georgia ml-4 -mt-16 md:ml-10 md:-mt-28 text-white">
            PRESENTS
          </div>
          <div className="text-lg md:text-3xl flex justify-center font-georgia mt-3 ml-5 md:mt-6  md:ml-7 text-white">
            KNIGHT'S GAMBIT 1.0
          </div>
          <div className="flex justify-center mt-6 md:mt-10 md:ml-5 ml-6">
            <span className="w-16 md:w-32">
              <img src={grandprize} alt="" />
            </span>
            <span className="text-white font-georgia text-base md:text-2xl -ml-3 -mr-3 md:-ml-6 md:-mr-6 md:mt-4">
              {" "}
              Prizes Worth 15K
            </span>
            <span className=" w-16 md:w-32">
              <img src={grandprize} alt="" />
            </span>
          </div>

          <div className="border-2 rounded-xl border-white mt-8 mx-8 md:mx-80 ">
            <div className="flex justify-center">
              <div className="my-5 font-bold font-georgia text-xl md:text-3xl text-white">
                Register Now
              </div>
            </div>

            <div className="flex justify-center">
              <form
                className="mt-5 md:ml-0 md:mt-10 text-sm md:text-base"
                onSubmit={handleSubmit}
              >
                <div className="mb-4 ml-5 md:ml-40">
                  <label
                    htmlFor="fullName"
                    className="w-16 md:w-28  text-white mb-2"
                  >
                    <div className="font-bold font-georgia">Full Name: </div>
                    <div>{"(Name of the participant) "}</div>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    className="w-11/12 mt-3 md:w-4/5 border rounded py-2 px-3 "
                    value={fullName}
                    onChange={(event) => setFullName(event.target.value)}
                    required
                  />
                </div>
                <div className="mb-4 ml-5 mt-5 md:ml-40">
                  <label
                    htmlFor="email"
                    className="block w-28 text-white font-bold mb-2"
                  >
                    <div className="font-bold font-georgia">Email:</div>
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-11/12 mt-3 md:w-4/5 border rounded py-2 px-3 "
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                  />
                </div>
                <div className="mb-4 ml-5 mt-5 md:ml-40">
                  <label className="font-georgia font-bold text-white">
                    Gender :
                  </label>
                  <div className="text-white font-georgia font-bold mt-3 ml-16">
                    {genderOptions.map((option) => (
                      <div key={option.value}>
                        <input
                          type="radio"
                          id={option.value}
                          name="gender"
                          value={option.value}
                          className="w-4"
                          checked={gender === option.value}
                          onChange={(event) => setGender(event.target.value)}
                        />
                        <label className="ml-1" htmlFor={option.value}>
                          {option.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mb-4 ml-5 mt-5 md:ml-40">
                  <label
                    htmlFor="dob"
                    className="block w-28 text-white font-bold mb-2"
                  >
                    <div className="font-bold font-georgia">Date of Birth:</div>
                  </label>
                  <input
                    type="text"
                    id="dob"
                    className="w-11/12 mt-3 md:w-4/5 border rounded py-2 px-3 "
                    value={dob}
                    onChange={(event) => setDob(event.target.value)}
                    required
                  />
                </div>
                <div className="mb-4 ml-5 mt-5 md:ml-40">
                  <label
                    htmlFor="phoneNo"
                    className="w-16 md:w-28  text-white mb-2"
                  >
                    <div className="font-bold font-georgia">Whatsapp No.: </div>
                    <div>{"(Please enter your whatsapp contact no.) "}</div>
                  </label>
                  <input
                    type="text"
                    id="phoneNo"
                    className="w-11/12 mt-3 md:w-4/5 border rounded py-2 px-3 "
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                    required
                  />
                </div>
                <div className="mb-4 ml-5 mt-5 md:ml-40">
                  <label
                    htmlFor="institute"
                    className="w-16 md:w-28  text-white mb-2"
                  >
                    <div className="font-bold font-georgia">
                      Institute Name(Optional):{" "}
                    </div>
                    <div>
                      {"(Enter the current name of your institution, if any) "}
                    </div>
                  </label>
                  <input
                    type="text"
                    id="institute"
                    className="w-11/12 mt-3 md:w-4/5 border rounded py-2 px-3 "
                    value={institute}
                    onChange={(event) => setInstitute(event.target.value)}
                  />
                </div>
                <div className="mb-4 mt-5 ml-5 md:ml-40">
                  <label className="font-georgia font-bold text-white">
                    Game Category:
                  </label>
                  <div className="text-white font-georgia font-bold mt-3 ml-16">
                    {gameCategories.map((option) => (
                      <div key={option.value}>
                        <input
                          type="radio"
                          id={option.value}
                          name="gender"
                          value={option.value}
                          className="w-4"
                          checked={gameCategory === option.value}
                          onChange={(event) =>
                            setGameCategory(event.target.value)
                          }
                        />
                        <label className="ml-1" htmlFor={option.value}>
                          {option.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mb-4 mt-5 ml-5 md:ml-40">
                  <label
                    htmlFor="idProofFile"
                    className="w-16 md:w-28  text-white mb-2"
                  >
                    <div className="font-bold font-georgia">
                      Identity Proof:{" "}
                    </div>
                    <span className="w-4/5">
                      {
                        "(School/College ID/Aadhar/Birth Certificate or similar valid document containing Date of Birth) "
                      }
                    </span>
                  </label>
                  <input
                    type="file"
                    id="idProofFile"
                    className="w-11/12 mt-3 md:w-4/5 border bg-white rounded py-2 px-3 "
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={handleIdProofFileChange}
                    required
                  />
                </div>
                <div className="mb-4 ml-5 mt-5 md:ml-40">
                  <label
                    htmlFor="fideit"
                    className="block w-28 text-white font-bold mb-2"
                  >
                    <div className="font-bold font-georgia">Fide Id:</div>
                  </label>
                  <input
                    type="text"
                    id="fideid"
                    className="w-11/12 mt-3 md:w-4/5 border rounded py-2 px-3 "
                    value={fideId}
                    onChange={(event) => setFideId(event.target.value)}
                    required
                  />
                </div>
                <div className="mb-4 ml-5 mt-5 md:ml-40">
                  <label
                    htmlFor="fiderating"
                    className="block w-28 text-white font-bold mb-2"
                  >
                    <div className="font-bold font-georgia">Fide Rating:</div>
                  </label>
                  <input
                    type="text"
                    id="fiderating"
                    className="w-11/12 mt-3 md:w-4/5 border rounded py-2 px-3 "
                    value={fideRating}
                    onChange={(event) => setFideRating(event.target.value)}
                    required
                  />
                </div>

                <div className="mb-4 mt-5 ml-5 md:ml-40">
                  <label
                    htmlFor="paymentProofFile"
                    className="w-16 md:w-28  text-white mb-2"
                  >
                    <div className="font-bold font-georgia">
                      Payment Proof:(Entry Fee Rs 300){" "}
                    </div>
                    <span className="flex">
                      {"(Upload the Screenshot of registration fee paid.) "}
                    </span>
                  </label>
                  <input
                    type="file"
                    id="paymentProofFile"
                    className="w-11/12 mt-3 md:w-4/5 border bg-white rounded py-2 px-3 "
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={handlepaymentProofFileChange}
                    required
                  />
                </div>

                <div className="flex justify-center mt-8">
                  <div className="border rounded px-5 py-3">
                    <div className="text-white font-georgia font-bold text-base">
                      PAY ON UPI ID: 7002572852@ybl
                    </div>
                    <div className="text-white font-georgia font-bold text-base">
                      Gpay Number: 7002572852
                    </div>
                  </div>
                </div>

                <div className="flex justify-center mt-10 mb-5">
                  <button
                    type="submit"
                    className="bg-black text-white py-2 px-4 rounded"
                  >
                    {}
                    {isLoading ? (
                        <div className="flex"><svg
                        class="animate-spin  h-5 w-5 mr-3 ..."
                        viewBox="0 0 24 24"
                        fill="white"
                      ></svg>Processing...</div>
                      
                    ) : (
                      "Submit"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
