//https://react-hook-form.com/get-started
import { useForm} from "react-hook-form"

const Form =()=> {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm()


async function onSubmit(data) {

  //API call lai simulate garxam
  await new Promise((resolve) =>
    setTimeout(resolve, 5000)
  );

  console.log("Submitting the form", data);
}

return (
<>
<form onSubmit={handleSubmit(onSubmit)}>
    
        <div>
  {/* React Hook Form tracks this input field using register */}
  <label>First Name</label>

  <input
    className={errors.firstName ? "input-error" : ""}
    {...register("firstName", {
      required: "First Name is required",
      minLength: {
        value: 3,
        message: "At least 3 characters are required",
      },
      maxLength: {
        value: 10,
        message: "Maximum 10 characters are allowed",
      },
    })}
  />

  {errors.firstName && (
    <p className='error-msg'>{errors.firstName.message}</p>
  )}
</div>
   <div>
  <label>Middle Name</label>

  <input
    {...register("middleName", {
      required: "Middle Name is required",
    })}
    aria-invalid={errors.middleName ? "true" : "false"}
  />

  {errors.middleName && (
    <p>{errors.middleName.message}</p>
  )}
</div>
    <br/>
    <div>
        <label>Last Name</label>
        <input {...register("lastName")}/>
    </div>
    <br/>
    <div>
    <input type="submit" disabled={isSubmitting} value={isSubmitting ? "Submitting":"Sumit"}/>
    </div>
    <br/>
</form>
</>

)
}
export default Form