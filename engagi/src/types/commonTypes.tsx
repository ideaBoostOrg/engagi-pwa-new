export type EventDataType = {
    name: string;
    id: string;
    event_name: string;
    host_name: string;
    venue: string;
    date: string;
    time: string;
    state: string;
    attendance: Number;
    description: string;
};

export type AllDataType = {
    id: string;
    name: string;
    event_name: string;
    host_name: string;
    venue: string;
    date: string;
    time: string;
    attendance: Number;
    description: string;
};

export type NotificationType = {
    notification_id: string;
    notification_title: string;
    notification_status: string;
    notification_date: string;
    notification_time: string;
    notification_description: string;
    read: boolean;
};