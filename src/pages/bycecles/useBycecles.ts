import { useMutation, useQuery, useQueryClient } from "react-query";
import { IByceclesList } from "./interfaces/ByceclesList";
import { IBycecle, Status } from "./interfaces/Bycecles";
import { useMemo } from "react";
import { IByceclesStats } from "./interfaces/ByceclesStats";

const api = "http://localhost:3000/bycecles";

type ReturnType = {
  isLoading: boolean;
  list?: IBycecle[];
  stats?: IByceclesStats;
  updateStatus: (slug: string, status: Status) => void;
  addNewBycecle: (data: Omit<IBycecle, "status">) => void;
  removeBycecle: (slug: string) => void;
};

export function useBycecles(): ReturnType {
  const queryClient = useQueryClient();
  const { isLoading, data } = useQuery<IByceclesList, Error>("Bycecles", () =>
    fetch(api)
      .then((response) => response.json())
      .catch((err) => console.error(err))
  );

  const sortedList = useMemo(() => {
    return data?.data.sort((a, b) => a.status.localeCompare(b.status));
  }, [data]);

  const updateStatusMutation = useMutation(
    async (data: { slug: string; status: string }) => {
      try {
        const response = await fetch(
          "http://localhost:3000/bycecles?id=" + data.slug,
          {
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ status: data.status }),
            method: "PATCH",
          }
        );
        queryClient.invalidateQueries("Bycecles");
        return response.json();
      } catch (err) {
        console.error(err);
      }
    }
  );

  const addNewBycecleMutation = useMutation(
    async (data: Omit<IBycecle, "status">) =>
      await fetch("http://localhost:3000/bycecles", {
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        method: "POST",
      })
  );

  const removeBycecleMutation = useMutation(async (slug: string) => {
    try {
      const response = await fetch(
        "http://localhost:3000/bycecles?id=" + slug,
        {
          method: "DELETE",
        }
      );
      queryClient.invalidateQueries("Bycecles");
      return response.json();
    } catch (err) {
      console.error(err);
    }
  });

  function updateStatus(slug: string, status: Status) {
    updateStatusMutation.mutate({ slug, status });
  }

  async function addNewBycecle(data: Omit<IBycecle, "status">) {
    const response = await addNewBycecleMutation.mutateAsync(data);

    if (!response.ok) {
      const message = await response.json();
      console.error(message);
      return {
        slug: message.message,
      };
    }
    queryClient.invalidateQueries("Bycecles");
  }

  function removeBycecle(slug: string) {
    removeBycecleMutation.mutate(slug);
  }

  return {
    isLoading,
    updateStatus,
    addNewBycecle,
    removeBycecle,
    list: sortedList,
    stats: data?.stats,
  };
}
