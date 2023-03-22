import asyncUploadUser from "./100-await";

const test = async () => {
    const value = await asyncUploadUser();
    console.log(value);
};

test();

/*
{
  photo: { status: 200, body: 'photo-profile-1' },
  user: { firstName: 'Guillaume', lastName: 'Salva' }
}
*/
