import type { user, userRes } from '../../types/natebooktypes';

export function validateUserValues(username: string, password: string): number {
    if (!username || username.trim() == '') {
        return -1;
    }
    if (!password || password.trim() == '') {
        return -2;
    }
    return 0;
}

export async function validateUserNotExists(username: string, password: string): Promise<boolean> {
    const res: userRes = await $fetch('api/finduser', {
        method: 'POST',
        body: {
            username: username,
            password: password,
        }
    });

  if (res.result.rows[0] !== undefined) {
      if (res.result.rows[0].username === username) {
        return true;
    }
  }
    return false;
}