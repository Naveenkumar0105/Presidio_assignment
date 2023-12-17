function Footer() {
    return (
      <footer className=" text-gray-600  py-10 ml-32 mr-32 mb-11 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <ul className="ml-4 flex space-x-4 text-sm">
              <li>
                <a href="#" className="hover:underline">@2023 Dribbble</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Terms</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Privacy</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Cookies</a>
              </li>
            </ul>
          </div>
          <div className="flex items-center space-x-4">
            <ul className="flex space-x-4 text-sm">
              <li>
                <a href="#" target="_blank" className="hover:underline">
                  Jobs
                </a>
              </li>
              <li>
                <a href="#" target="_blank" className="hover:underline">
                  Designers
                </a>
              </li>
              <li>
                <a href="#" target="_blank" className="hover:underline">
                  Freelancers
                </a>
              </li>
              <li>
                <a href="#" target="_blank" className="hover:underline">
                  Tags
                </a>
              </li>
              <li>
                <a href="#" target="_blank" className="hover:underline">
                  Places
                </a>
              </li>
              <li>
                <a href="#" target="_blank" className="hover:underline">
                  Resources
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }

  export default Footer;
  