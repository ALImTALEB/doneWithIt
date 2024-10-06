import apiClient from "./client";

export const getListings = () => apiClient.get("/listings");

export const addListing = (listing, onUploadProgress) => {
  const formData = new FormData();
  formData.append("title", listing.title);
  formData.append("price", listing.price);
  formData.append("categoryId", listing.category.value);
  formData.append("description", listing.description);

  listing.images.forEach((image, index) => {
    formData.append("images", {
      uri: image,
      name: "image" + index,
      type: "image/jpeg",
    });
  });

  if (listing.location) {
    data.append("location", JSON.stringify(listing.location));
  }
  return apiClient.post("/listings", formData, {
    headers: { "Content-Type": "multipart/form-data" },
    onUploadProgress: (progress) => {
      if (onUploadProgress) {
        onUploadProgress(progress.loaded / progress.total);
      }
    },
  });
};
