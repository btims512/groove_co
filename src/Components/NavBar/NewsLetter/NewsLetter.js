import React from "react";
import { useForm } from "react-hook-form";

// export default function NewsLetter() {
//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm();
//   const onSubmit = (data) => console.log(data);

//   return (
//     /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
//     <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", justifyContent: "flex-end", color: "white" }}>
//       {/* register your input into the hook by invoking the "register" function */}
//       Sign up for our newsletter!
//       {/* include validation with required or other standard HTML validation rules */}
//       <input {...register("exampleRequired", { required: true })} />
//       {/* errors will return when field validation fails  */}
//       {errors.exampleRequired && <span>This field is required</span>}
//       <input type="submit" />
//     </form>
//   );
// }

// export const NewsLetter = () => (
//   <>
//     <div className="d-flex flex-row">
//       <div className="p-2" div className="Signup__text">
//         Sign up for our newsletter!
//       </div>
//       <section className="Signup">
//         <form class="Signup__form" id="newsletter">
//           <input
//             required
//             id="email"
//             type="email"
//             placeholder="Your Email"
//           ></input>
//         </form>
//       </section>
//       <button
//         form="newsletter"
//         style={{ height: "30px" }}
//         type="submit"
//         class="Signup__button"
//       >
//         Submit
//       </button>
//     </div>
//   </>
// );
