const baseUrl = "https://module-c-1-solution.dineease.com/api/v1";

async function _fetch(path, body, method) {
  if (!method) method = body ? "POST" : "GET";

  const token = localStorage.getItem("token");

  const headers = {};

  if (body) {
    headers["Content-Type"] = "application/json";
  }

  if (token !== null) {
    headers["Authorization"] = "Bearer " + token;
  }

  const res = await fetch(baseUrl + path, {
    method,
    headers,
    ...(body
      ? {
          body: JSON.stringify(body),
        }
      : {}),
  });

  if (res.status >= 400) {
    throw new Error(
      path + " returned " + res.status + ": " + (await res.text())
    );
  } else {
    const out = await res.text();
    try {
      return JSON.parse(out);
    } catch (_) {
      return out;
    }
  }
}

export async function login(pin) {
  return await _fetch("/login/pin", { pin });
}

export async function getCategories() {
  return (await _fetch("/menuCategories")).sort(
    (a, b) => a.priority - b.priority
  );
}

export async function getItems() {
  return await _fetch("/menuItems");
}

export async function getTables() {
  return await _fetch("/tables");
}

export async function getOpenOrderByTable(tableId) {
  return await _fetch("/orders/tables/" + tableId);
}

export async function closeOrder(tableId) {
  return await _fetch("/orders/tables/" + tableId + "/close", undefined, "PUT");
}

export async function createOrder(tableId) {
  return await _fetch("/orders", { tableId }, "POST");
}

export async function createOrderItem(params) {
  return await _fetch("/orderItems", params, "POST");
}
