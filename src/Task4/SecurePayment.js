import React from 'react';

const SecurePayment = () => {
  const features = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 11c.556 0 1 .444 1 1v2c0 .556-.444 1-1 1s-1-.444-1-1v-2c0-.556.444-1 1-1zm-1-7h2c.556 0 1 .444 1 1v3h2c.556 0 1 .444 1 1v10c0 .556-.444 1-1 1H8c-.556 0-1-.444-1-1V9c0-.556.444-1 1-1h2V5c0-.556.444-1 1-1z"
          />
        </svg>
      ),
      title: 'Secure payment',
      description: 'Have you ever finally just',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 8h2a2 2 0 012 2v7a2 2 0 01-2 2H5a2 2 0 01-2-2v-7a2 2 0 012-2h2M12 3v3m0 0c1.104 0 2 .896 2 2 0 .895-.896 1.999-2 2-.893 0-2-.893-2-2 0-1.104.897-2 2-2z"
          />
        </svg>
      ),
      title: 'Customer support',
      description: 'Have you ever finally just',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 17a2 2 0 01-2-2V5a2 2 0 012-2h5a2 2 0 012 2v10a2 2 0 01-2 2H9zm7-4v4h4v-4a1 1 0 011-1h3V7a1 1 0 00-1-1h-5m-4 4a4 4 0 110-8 4 4 0 010 8z"
          />
        </svg>
      ),
      title: 'Free delivery',
      description: 'Have you ever finally just',
    },
  ];

  return (
    <div className="flex flex-wrap justify-around items-center bg-gray-100 p-6 gap-6">
      {features.map((feature, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center space-y-2"
        >
          <div className="bg-gray-200 p-4 rounded-full">{feature.icon}</div>
          <h4 className="text-gray-800 font-medium">{feature.title}</h4>
          <p className="text-sm text-gray-600">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default SecurePayment;
