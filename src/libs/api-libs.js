export const getAnimeResponse = async (resource, query) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`
  );
  const anime = await response.json();
  return anime;
};

export const getNestedAnimeResponse = async (resource, objectProperty) => {
  const response = await getAnimeResponse(resource);

  if (response.data) {
    const item = response.data.flatMap((item) => item[objectProperty]);
    return item;
  } else {
    console.error("Response data is undefined:", response);
  }
};

export const reproduse = (data, gap) => {
  if (data && data.length > 0) {
    const first = ~~(Math.random() * (data.length - gap) + 1);
    const last = first + gap;

    const response = { data: data.slice(first, last) };
    return response;
  } else {
    console.error("Data is undefined or empty:", data);
    // Throw an error or return a default value here
    return { data: [] }; // Returning an empty array as a default value
  }
};
