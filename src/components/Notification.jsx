const Notification = ({ notification }) => {
  return (
    <div
      className='bg-white p-2 rounded font-semibold'
      style={{
        position: 'absolute',
        top: 40,
        right: notification ? 80 : -40,
        transition: '0.6s ease-in-out',
      }}
    >
      <p>{notification && notification}</p>
    </div>
  );
};

export default Notification;
