import time

proactive_noti_sent_at = {}  # {<uid:app_id>: (ts, ex)}


def set_proactive_noti_sent_at(uid: str, app_id: str, ts: int, ttl: int = 30):
    k = f'{uid}:{app_id}'
    proactive_noti_sent_at[k] = (ts, ttl + time.time())


def get_proactive_noti_sent_at(uid: str, app_id: str):
    k = f'{uid}:{app_id}'
    if k not in proactive_noti_sent_at:
        return None

    ts, ex = proactive_noti_sent_at[k]
    if ex < time.time():
        del proactive_noti_sent_at[k]
        return None
    return ts
