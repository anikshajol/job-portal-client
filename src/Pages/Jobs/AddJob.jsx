import React from "react";
import axios from "axios";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const AddJob = () => {
  const { user } = useAuth();

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const jobData = Object.fromEntries(formData.entries());
    const imgFile = formData.get("company_logo");

    const { max, min, currency, ...newJob } = jobData;

    newJob.salaryRange = { min, max, currency };

    newJob.requirements = newJob.requirements
      .split(",")
      .map((req) => req.trim());
    newJob.responsibilities = newJob.responsibilities
      .split(",")
      .map((resp) => resp.trim());

    newJob.status = "active";
    // console.log(newJob);

    try {
      if (imgFile && imgFile.size > 0) {
        const imgData = new FormData();
        imgData.append("image", imgFile);
        const imgRes = await axios.post(
          `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMG_KEY}`,
          imgData,
        );

        if (imgRes.data.success) {
          newJob.company_logo = imgRes.data.data.display_url;
        } else {
          newJob.company_logo = "";
        }
      }

      // data post to server

      const res = await axios.post(`http://localhost:5000/jobs`, newJob);
      console.log(res.data);
      if (res.data.insertedId) {
        Swal.fire({
          title: "Congratulations",
          text: "Your job post data added Successfully",
          icon: "success",
          timer: 2000,
        });
      }
    } catch (error) {
      console.log(error);
      Swal.fire("Error", "Something went wrong while posting the job", "error");
    }

    console.log(newJob);

    /*     fetch(
      `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMG_KEY}`,
      {
        method: "POST",
        body: imgData,
      },
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // console.log(data.data.display_url);
        if (data.success) {
          jobData.company_logo = data.data.display_url;
        }
      })
      .catch((err) => console.log(err)); */
  };

  return (
    <div>
      <div className="max-w-4xl mx-auto my-10 p-8 bg-base-200 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6">Post a New Job</h2>

        <form
          onSubmit={handleOnSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Job Title */}
          <fieldset className="form-control fieldset">
            <label className="label font-semibold">Job Title</label>
            <input
              type="text"
              name="title"
              placeholder="Software Engineer"
              className="input input-bordered focus:input-primary"
              required
            />
          </fieldset>

          {/* Company Name */}
          <fieldset className="fieldset">
            <label className="label font-semibold">Company</label>
            <input
              type="text"
              name="company"
              placeholder="Company name"
              className="input input-bordered"
            />
          </fieldset>

          {/* Job Type */}
          <fieldset className="fieldset">
            <label className="label font-semibold">Job Type</label>
            <select name="jobType" className="select select-bordered">
              <option>Hybrid</option>
              <option>Remote</option>
              <option>On-site</option>
            </select>
          </fieldset>

          {/* Category */}
          <fieldset className="fieldset ">
            <label className="label font-semibold">Category</label>
            <input
              type="text"
              name="category"
              className="input input-bordered"
            />
          </fieldset>

          {/* Salary Range (Min) */}
          <fieldset className="fieldset">
            <label className="label font-semibold">Min Salary </label>
            <input type="number" name="min" className="input input-bordered" />
          </fieldset>

          {/* Salary Range (Max) */}
          <fieldset className="fieldset">
            <label className="label font-semibold">Max Salary</label>
            <input type="number" name="max" className="input input-bordered" />
          </fieldset>

          {/* Currency select*/}
          <fieldset className="fieldset">
            <label className="label font-semibold">Currency</label>
            <select name="currency" className="select select-bordered">
              <option>BDT</option>
              <option>USD</option>
              <option>EUR</option>
            </select>
          </fieldset>

          {/* Deadline */}
          <fieldset className="fieldset">
            <label className="label font-semibold">Application Deadline</label>
            <input
              type="date"
              name="applicationDeadline"
              className="input input-bordered"
              required
            />
          </fieldset>

          {/* Requirements */}
          <fieldset className="fieldset">
            <label className="label font-semibold">
              Requirements (comma separated)
            </label>
            <input
              type="text"
              name="requirements"
              placeholder="React, Node.js, MongoDB"
              className="input input-bordered"
            />
          </fieldset>

          {/* responsibilities */}
          <fieldset className="fieldset">
            <label className="label font-semibold">
              Responsibilities (comma separated)
            </label>
            <input
              type="text"
              name="responsibilities"
              placeholder="Develop and maintain software"
              className="input input-bordered"
            />
          </fieldset>

          {/* location */}
          <fieldset className="fieldset ">
            <label className="label font-semibold"> Job Location </label>
            <input
              type="text"
              name="location"
              placeholder="Abc, Abc, Abc"
              className="input input-bordered"
            />
          </fieldset>

          {/* hr_Email */}
          <fieldset className="fieldset ">
            <label className="label font-semibold"> HR Email </label>
            <input
              type="email"
              defaultValue={user?.email}
              name="hr_email"
              placeholder="abc@xxx.com"
              className="input input-bordered"
            />
          </fieldset>

          {/* hr_name */}
          <fieldset className="fieldset ">
            <label className="label font-semibold"> HR Name </label>
            <input
              type="text"
              defaultValue=""
              name="hr_name"
              placeholder="Hr Name"
              className="input input-bordered"
            />
          </fieldset>

          {/* Description */}
          <fieldset className="fieldset ">
            <label className="label font-semibold">Job Description</label>
            <textarea
              name="description"
              className="textarea textarea-bordered h-24"
              placeholder="Write job details..."
            ></textarea>
          </fieldset>

          {/* Photo */}
          <fieldset className="fieldset">
            <label className="label font-semibold"> Company Logo </label>
            <input
              type="file"
              name="company_logo"
              className="file-input file-input-primary"
            />
          </fieldset>
          {/* Submit Button */}
          <div className="form-control md:col-span-2 mt-6">
            <button type="submit" className="btn btn-primary btn-block text-lg">
              Add Job to Database
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddJob;
