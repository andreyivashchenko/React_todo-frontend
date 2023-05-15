import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import axios from '../../axios';
import { Itask } from '../../types/types';
import { AxiosRequestConfig } from 'axios';
import { useAppDispatch } from '../../hooks/useAppDispatch';

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async (params) => {
  return await axios
    .get('/api/all')
    .then((res) => {
      return res.data;
    })
    .catch((rej) => {
      console.log(rej.res.message);
      throw new Error(rej.res.message);
    });
});

export const fetchChangeTask = createAsyncThunk('tasks/fetchChangeTask', async (params: Itask) => {
  return await axios
    .put('api/update', params as AxiosRequestConfig)
    .then((res) => {
      return res.data;
    })
    .catch((rej) => {
      throw new Error(rej.res.message);
    });
});
interface TaskState {
  tasks: Itask[];
  loading: boolean;
  error: string | null;
}

const initialState: TaskState = {
  tasks: [],
  loading: false,
  error: null,
};
const index = (state: TaskState, payload: string) => state.tasks.findIndex((item) => item._id === payload);
const find = (state: TaskState, payload: Itask) => {
  const copy = [...state.tasks];
  const current = copy.find((t) => t._id === payload._id);
  if (current) {
    current.completed = !current.completed;
  }
  state.tasks = copy;
};

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    // completion: (state, action) => {
    //   state.tasks[index(state, action.payload)].completed = !state.tasks[index(state, action.payload)].completed;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        if (state.tasks) {
          state.tasks = action.payload;
        }
        state.loading = false;
      })
      .addCase(fetchTasks.rejected, (state) => {
        state.loading = false;
      })
      .addCase(fetchChangeTask.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchChangeTask.fulfilled, (state, action) => {
        find(state, action.payload);
      })
      .addCase(fetchChangeTask.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const {} = taskSlice.actions;

// export const selectCount = (state: RootState) => state.tasks.value;

export default taskSlice.reducer;
