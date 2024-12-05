import React, { useState } from 'react';
import { BellOutlined } from '@ant-design/icons'; // Assuming you are using Ant Design
import { Badge } from 'antd'; // Badge to show notification count

const NotificationBell = () => {
  const [notifications, setNotifications] = useState(3); // State for the number of notifications

  return (
    <div className="flex items-center justify-center">
      <div className="relative flex h-20 w-20">
        <Badge count={notifications} overflowCount={99}>
          <BellOutlined className="text-white text-xl" />
        </Badge>
      </div>
    </div>
  );
};

export default NotificationBell;
