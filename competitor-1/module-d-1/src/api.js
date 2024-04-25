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

export async function login(params) {
  return await _fetch("/login", params);
}

export async function getCategories() {
  return (await _fetch("/menuCategories")).sort(
    (a, b) => a.priority - b.priority
  );
}

export async function deleteCategory(id) {
  return await _fetch("/menuCategories/" + id, undefined, "DELETE");
}

export async function updateCategory(id, params) {
  return await _fetch("/menuCategories/" + id, params, "PUT");
}

export async function createCategort(params) {
  return await _fetch("/menuCategories", params, "POST");
}

export async function updateItem(id, params) {
  return await _fetch("/menuItems/" + id, params, "PUT");
}

export async function deleteItem(id) {
  return await _fetch("/menuItems/" + id, undefined, "DELETE");
}

export async function getItems() {
  return await _fetch("/menuItems");
}
