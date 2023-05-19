export default class AppController {

  static getHomepage(request, response) {
    return response.status(200).text('Hello Holberton School!');
  };
}
